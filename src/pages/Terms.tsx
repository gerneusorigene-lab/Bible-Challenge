import { ArrowLeft, Scale } from 'lucide-react';
import { useLocation } from 'wouter';



const EFFECTIVE_DATE = 'July 27, 2026';
const SUPPORT_EMAIL = 'Belleus.tech@gmail.com';

export default function Terms() {
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
            <Scale className="text-gold" size={28} />
          </div>

          <h1 className="font-serif text-3xl font-bold text-gold sm:text-4xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-3 font-serif text-sm text-card-foreground/60">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </header>

        <div className="space-y-8 font-serif leading-7 text-card-foreground/85">
          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              1. Acceptance of these terms
            </h2>

            <p>
              These Terms &amp; Conditions govern your use of the Bible
              Challenge website, mobile application, games, questions,
              subscriptions, and related services provided by Belleus
              Technologies.
            </p>

            <p className="mt-3">
              By accessing or using Bible Challenge, you agree to these terms.
              If you do not agree, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              2. About Bible Challenge
            </h2>

            <p>
              Bible Challenge is an educational and entertainment application
              designed to help users test and improve their knowledge of the
              Bible through quizzes, levels, challenges, and related learning
              features.
            </p>

            <p className="mt-3">
              The application is not intended to replace personal Bible study,
              pastoral counselling, theological instruction, or professional
              advice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              3. Free and premium access
            </h2>

            <p>
              Bible Challenge may provide a free version with limited access
              and a premium subscription that unlocks additional questions,
              levels, challenges, or other features.
            </p>

            <p className="mt-3">
              The features included in each version may be updated from time to
              time. Material reductions to paid functionality will not affect
              rights already granted for an active paid period except where
              reasonably necessary for legal, security, technical, or service
              continuity reasons.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              4. Premium subscription
            </h2>

            <p>
              Bible Challenge Premium is currently offered as an annual
              subscription for USD $4.99 per year, unless a different price,
              currency, trial, promotion, or billing period is displayed to you
              before checkout.
            </p>

            <p className="mt-3">
              Your subscription begins when payment is successfully processed.
              It remains active for the purchased subscription period and
              renews automatically unless it is cancelled before the next
              renewal date.
            </p>

            <p className="mt-3">
              The checkout page will display the applicable price, currency,
              taxes, renewal terms, and payment details before you complete a
              purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              5. Payment processing
            </h2>

            <p>
              Web subscription payments are processed through RevenueCat
              Billing and its payment-processing partners. Mobile purchases may
              be processed through the applicable app store.
            </p>

            <p className="mt-3">
              We do not directly receive or store your complete payment-card
              information. Payment processing is subject to the additional
              terms and privacy practices of the applicable payment provider.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              6. Automatic renewal and cancellation
            </h2>

            <p>
              Unless cancelled, an annual subscription automatically renews at
              the end of each billing period using the payment method associated
              with the subscription.
            </p>

            <p className="mt-3">
              You may cancel through the subscription-management option
              provided in your purchase or renewal emails, through the
              applicable customer portal, or through the app store where the
              subscription was purchased.
            </p>

            <p className="mt-3">
              Cancellation normally stops future renewals. You may continue
              using premium features until the end of the paid subscription
              period unless otherwise required by law or stated by the payment
              provider.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              7. Refunds
            </h2>

            <p>
              Refund requests are handled according to applicable law and the
              policies of the payment provider or app store through which the
              purchase was made.
            </p>

            <p className="mt-3">
              Contact us at{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-gold underline underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>{' '}
              if you need assistance identifying the appropriate refund or
              subscription-management process.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              8. Accounts and purchase access
            </h2>

            <p>
              Certain premium purchases may be associated with an email
              address, device, app-user identifier, redemption link, or account.
              You are responsible for providing accurate information and
              protecting access to your email and devices.
            </p>

            <p className="mt-3">
              You must not share purchase credentials, redemption links, or
              account access in a way that enables unauthorized use of premium
              content.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              9. Acceptable use
            </h2>

            <p>You agree not to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>use Bible Challenge for unlawful or fraudulent purposes;</li>
              <li>
                interfere with the operation, security, or availability of the
                service;
              </li>
              <li>
                attempt to bypass access controls, subscriptions, or premium
                restrictions;
              </li>
              <li>
                copy, scrape, reproduce, distribute, sell, or commercially
                exploit application content without written permission;
              </li>
              <li>
                reverse-engineer the service except where applicable law
                expressly permits it; or
              </li>
              <li>
                use automated systems to overload, probe, or disrupt the
                service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              10. Intellectual property
            </h2>

            <p>
              Bible Challenge, including its software, design, graphics,
              branding, question arrangements, original text, audio, and other
              original materials, is owned by or licensed to Belleus
              Technologies and is protected by applicable intellectual-property
              laws.
            </p>

            <p className="mt-3">
              Biblical passages and translations may be subject to separate
              copyright or licensing terms belonging to their respective
              publishers or rights holders.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              11. Accuracy and availability
            </h2>

            <p>
              We work to provide accurate and reliable questions, answers, and
              references. However, errors, translation differences, technical
              interruptions, or differing interpretations may occasionally
              occur.
            </p>

            <p className="mt-3">
              The service is provided on an “as available” basis. We do not
              guarantee uninterrupted access or that every feature will always
              be error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              12. Updates and changes
            </h2>

            <p>
              We may update Bible Challenge, add or remove features, correct
              content, perform maintenance, or modify these terms when
              reasonably necessary.
            </p>

            <p className="mt-3">
              Updated terms will be posted on this page with a revised
              effective date. Continued use after an update constitutes
              acceptance of the revised terms to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              13. Suspension or termination
            </h2>

            <p>
              We may restrict or terminate access where a user materially
              violates these terms, misuses the service, attempts fraud, creates
              security risks, or where suspension is reasonably required by
              law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              14. Limitation of liability
            </h2>

            <p>
              To the maximum extent permitted by applicable law, Belleus
              Technologies will not be liable for indirect, incidental,
              consequential, special, or punitive damages arising from use of,
              or inability to use, Bible Challenge.
            </p>

            <p className="mt-3">
              Nothing in these terms excludes rights, remedies, warranties, or
              liabilities that cannot legally be excluded or limited.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              15. Governing law
            </h2>

            <p>
              These terms are governed by the applicable laws of Ontario and
              the federal laws of Canada, without limiting any mandatory
              consumer-protection rights that may apply in your place of
              residence.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-gold">
              16. Contact
            </h2>

            <p>
              Questions about these terms, subscriptions, or Bible Challenge
              may be sent to:
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