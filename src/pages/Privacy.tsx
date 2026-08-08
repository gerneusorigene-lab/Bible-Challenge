import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useLocation } from 'wouter';

const EFFECTIVE_DATE = 'August 8, 2026';
const SUPPORT_EMAIL = 'belltech@gmail.com';
const ACCOUNT_DELETION_URL =
  'https://biblechallengegame.netlify.app/account-deletion.html';

export default function Privacy() {
  const [, setLocation] = useLocation();

  const handleReturnHome = () => {
    setLocation('/');
  };

  return (
    <main className="min-h-[100dvh] sacred-gradient px-4 py-10 text-card-foreground">
      <article className="mx-auto w-full max-w-3xl rounded-2xl border border-gold/30 parchment-bg p-6 shadow-lg sm:p-10">
        <button
          type="button"
          onClick={handleReturnHome}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-serif text-sm text-gold transition-colors hover:bg-gold/10"
        >
          <ArrowLeft size={16} />
          Return to Bible Challenge
        </button>

        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
            <ShieldCheck className="text-gold" size={28} />
          </div>

          <h1 className="font-serif text-3xl font-bold text-gold sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-3 font-serif text-sm text-card-foreground/60">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </header>

        <div className="space-y-8 font-serif leading-7 text-card-foreground/85">
          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              1. About this Privacy Policy
            </h2>
            <p>
              This Privacy Policy explains how Bible Challenge, provided by
              Belleus Technologies, handles personal information when you use
              the Bible Challenge website, mobile application, account,
              subscription features, and related services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              2. Information we collect
            </h2>
            <p>
              Bible Challenge may collect the following personal information
              when you create or use an account:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Email address</strong>, used to create, authenticate,
                and manage your account.
              </li>
              <li>
                <strong>User ID</strong>, such as the identifier assigned to
                your account by Firebase Authentication and identifiers used
                to associate account or entitlement information with your use
                of Bible Challenge.
              </li>
            </ul>
            <p className="mt-3">
              Bible Challenge does not require your precise or approximate
              location, phone number, postal address, race or ethnicity,
              sexual orientation, or political or religious beliefs as account
              data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              3. How we use information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>app functionality and user authentication;</li>
              <li>account creation, sign-in, sign-out, and account management;</li>
              <li>associating premium access or entitlements with an account;</li>
              <li>maintaining the security and reliability of the service; and</li>
              <li>responding to support, account, subscription, or deletion requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              4. Authentication and Firebase
            </h2>
            <p>
              Bible Challenge uses Firebase Authentication to provide
              email-and-password account creation and sign-in. Account
              information transmitted to Firebase is used to authenticate and
              manage your Bible Challenge account.
            </p>
            <p className="mt-3">
              Data transmitted between the app and supported services is sent
              over encrypted connections.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              5. Premium subscriptions and payment services
            </h2>
            <p>
              Bible Challenge may use RevenueCat and applicable app-store or
              payment-platform services to provide premium subscriptions,
              confirm purchase status, restore access, and manage
              entitlements.
            </p>
            <p className="mt-3">
              We do not directly receive or store your complete payment-card
              information. Payment and transaction information is handled by
              the applicable payment provider or app store according to its
              own privacy and retention practices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              6. Data sharing
            </h2>
            <p>
              Bible Challenge does not sell personal information. We do not
              share personal information with third parties for advertising or
              marketing purposes.
            </p>
            <p className="mt-3">
              Service providers such as Firebase, RevenueCat, app stores, and
              payment processors may process information on our behalf as
              necessary to provide authentication, subscription, purchase,
              security, and related service functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              7. Data retention
            </h2>
            <p>
              Account information is retained for as long as the account is
              active or as reasonably necessary to provide the service,
              maintain security, resolve disputes, comply with legal
              obligations, or enforce applicable agreements.
            </p>
            <p className="mt-3">
              Transaction or subscription records maintained separately by an
              app store, RevenueCat, or payment processor may be retained under
              that provider's own policies and applicable legal, accounting,
              security, fraud-prevention, or transaction-record requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              8. Account and data deletion
            </h2>
            <p>
              Signed-in users can request deletion directly within Bible
              Challenge by opening Settings, going to the Account section, and
              selecting Delete Account.
            </p>
            <p className="mt-3">
              You can also review the account-deletion instructions at{' '}
              <a
                href={ACCOUNT_DELETION_URL}
                target="_blank"
                rel="noreferrer"
                className="text-gold underline underline-offset-4"
              >
                {ACCOUNT_DELETION_URL}
              </a>
              .
            </p>
            <p className="mt-3">
              Deleting your Bible Challenge account deletes the associated
              Firebase Authentication identity, including the account email
              address and any display name stored with that authentication
              profile. Records maintained separately by payment providers or
              app stores may remain subject to their own retention policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              9. Local game data
            </h2>
            <p>
              Some game progress, preferences, achievements, or settings may
              be stored locally on your device. Local data may remain on that
              device until you reset progress, clear app data, or uninstall
              the application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              10. Children's privacy
            </h2>
            <p>
              Bible Challenge is an educational game and may be used by
              families. We do not knowingly request sensitive personal
              information from children beyond information required for
              supported account functionality. Parents or guardians who
              believe a child's personal information has been provided in
              error may contact us to request assistance or deletion.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              11. Security
            </h2>
            <p>
              We use reasonable technical and organizational safeguards
              designed to protect account information. Data transmitted
              between Bible Challenge and supported online services is
              transferred using encrypted connections.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              12. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy when Bible Challenge,
              applicable laws, or our service providers change. The effective
              date shown at the top of this page will be updated when material
              revisions are published.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              13. Contact
            </h2>
            <p>
              Questions about privacy, account information, or deletion
              requests may be sent to:
            </p>
            <div className="mt-4 rounded-xl border border-gold/20 bg-black/10 p-4">
              <p className="font-bold">Belleus Technologies</p>
              <p>Bible Challenge Support</p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-gold underline underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </section>
        </div>

        <footer className="mt-12 border-t border-gold/20 pt-6 text-center font-serif text-xs text-card-foreground/50">
          © {new Date().getFullYear()} Belleus Technologies. All rights
          reserved.
        </footer>
      </article>
    </main>
  );
}
