import Layout from "../layout";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-neutral dark:prose-invert">
      <div className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy explains how personal data is collected, used, and protected when you visit and interact with <strong>pastforwardhub.com</strong>. The website is operated by individuals based in the EU and adheres to the General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-xl font-bold mb-4">1. Data Controller</h2>
        <p className="mb-4">
          The data controller responsible for this website is:
          <br />
          PastForward Collective
          <br />
          Contact: pastforwardplatform@proton.me
          <br />
          Location: Amsterdam / Vienna
        </p>

        <h2 className="text-xl font-bold mb-4">2. Data We Collect</h2>
        <p className="mb-4">
          We only collect personal data that is necessary for providing and improving the website’s services. This includes:
        </p>
        <ul className="list-disc list-inside mb-4">
        <li>
            <strong>Contact Information</strong>: When you contact us via forms or email, we may collect your name, email address, and the content of your message.
          </li>
          <li>
            <strong>Usage Data</strong>: We collect anonymised data about how the site is used. This may include IP address (in anonymised form), browser type, pages visited, and duration of visit.
          </li>
          <li>
            <strong>Cookies and Analytics</strong>: The site uses cookies for basic functionality and may use analytics tools (such as Plausible Analytics or Matomo) to better understand how visitors interact with the site.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">3. Purpose and Legal Basis</h2>
        <p className="mb-4">
          We process your data for the following purposes, based on the following legal grounds:
        </p>
        <ul className="list-disc list-inside mb-4">
        <li>
            <strong>To respond to your inquiries</strong> (Article 6(1)(b) GDPR – performance of a contract or steps prior to entering a contract).
          </li>
          <li>
            <strong>To improve the website</strong> and ensure its technical functionality (Article 6(1)(f) GDPR – legitimate interest).
          </li>
          <li>
            <strong>To comply with legal obligations</strong> where applicable (Article 6(1)(c) GDPR).
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">4. Third-Party Services</h2>
        <p className="mb-4">
          We may use privacy-friendly third-party services that do not track individual users, such as:
        </p>
        <ul className="list-disc list-inside mb-4">
        <li>Plausible Analytics (self-hosted or EU-hosted)</li>
          <li>Contact forms that send messages directly via email or store them temporarily</li>
        </ul>
        <p className="mb-4">
          Where embedded content is used (e.g. YouTube, Instagram), those providers may collect data as if you visited their site directly. Please consult their respective privacy policies.
        </p>

        <h2 className="text-xl font-bold mb-4">5. Data Retention</h2>
        <p className="mb-4">
          Personal data will only be stored for as long as necessary to fulfil the purposes outlined above or to comply with applicable legal obligations.
        </p>

        <h2 className="text-xl font-bold mb-4">6. Data Security</h2>
        <p className="mb-4">
          Appropriate technical and organisational measures are in place to protect personal data from unauthorised access, disclosure, or alteration.
        </p>

        <h2 className="text-xl font-bold mb-4">7. Your Rights</h2>
        <p className="mb-4">
          Under the GDPR, you have the right to:
        </p>
        <ul className="list-disc list-inside mb-4">
        <li>Access the personal data held about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw your consent (where applicable)</li>
          <li>Object to processing based on legitimate interests</li>
          <li>File a complaint with a supervisory authority (e.g. the Austrian Data Protection Authority or the Dutch Autoriteit Persoonsgegevens)</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">8. Contact</h2>
        <p className="mb-4">
          For any questions or requests related to this Privacy Policy or your personal data, please contact:
          <br />
          <strong>pastforwardplatform@proton.me</strong>
        </p>

        <h2 className="text-xl font-bold mb-4">9. Updates</h2>
        <p className="mb-4">
          This policy may be updated occasionally. The most recent version will always be available on this page. Last updated: 27 March 2025.
        </p>
        </div>
      </main>
    </Layout>
  );
}
