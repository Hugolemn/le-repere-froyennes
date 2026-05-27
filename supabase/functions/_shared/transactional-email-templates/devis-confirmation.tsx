import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Le Repère Froyennes'

interface DevisConfirmationProps {
  name?: string
  eventType?: string
}

const DevisConfirmationEmail = ({ name, eventType }: DevisConfirmationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nous avons bien reçu votre demande de devis</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Merci ${name} !` : 'Merci pour votre demande !'}
        </Heading>
        <Text style={text}>
          Nous avons bien reçu votre demande de devis{eventType ? ` pour votre ${eventType.toLowerCase()}` : ''} et nous vous en remercions.
        </Text>
        <Text style={text}>
          Notre équipe revient vers vous <strong>sous 24h</strong> avec une proposition adaptée à vos envies.
        </Text>
        <Text style={text}>
          En attendant, si vous avez la moindre question, n'hésitez pas à nous joindre au{' '}
          <strong>0472 68 41 62</strong>.
        </Text>
        <Text style={footer}>À très bientôt,<br />L'équipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: DevisConfirmationEmail,
  subject: 'Votre demande de devis — Le Repère Froyennes',
  displayName: 'Confirmation — Demande de devis',
  previewData: { name: 'Marie', eventType: 'Mariage' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#111111', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const footer = { fontSize: '14px', color: '#666666', margin: '28px 0 0', lineHeight: '1.6' }
