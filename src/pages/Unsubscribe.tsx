import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type State = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anon = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: anon },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) setState("valid");
        else if (data?.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    setSubmitting(false);
    if (error) return setState("error");
    if (data?.success) setState("success");
    else if (data?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-card rounded-2xl p-8 border border-border text-center">
          {state === "loading" && (
            <p className="text-muted-foreground">Vérification en cours…</p>
          )}
          {state === "valid" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-3">Se désabonner</h1>
              <p className="text-muted-foreground mb-6">
                Confirmez votre désabonnement pour ne plus recevoir nos emails.
              </p>
              <button
                onClick={handleConfirm}
                disabled={submitting}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "En cours…" : "Confirmer le désabonnement"}
              </button>
            </>
          )}
          {state === "success" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-3">Désabonnement confirmé</h1>
              <p className="text-muted-foreground mb-6">Vous ne recevrez plus nos emails.</p>
              <Link to="/" className="text-primary font-semibold hover:underline">Retour à l'accueil</Link>
            </>
          )}
          {state === "already" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-3">Déjà désabonné</h1>
              <p className="text-muted-foreground mb-6">Cette adresse est déjà désinscrite.</p>
              <Link to="/" className="text-primary font-semibold hover:underline">Retour à l'accueil</Link>
            </>
          )}
          {(state === "invalid" || state === "error") && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-3">Lien invalide</h1>
              <p className="text-muted-foreground mb-6">
                Ce lien de désabonnement n'est pas valide ou a expiré.
              </p>
              <Link to="/" className="text-primary font-semibold hover:underline">Retour à l'accueil</Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Unsubscribe;
