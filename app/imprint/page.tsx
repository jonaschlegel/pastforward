import Layout from "../layout";

export default function ImprintPage() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">Imprint</h1>
        <p className="mb-4">
          This website is operated in accordance with §5 TMG (Germany), §24 MedienG (Austria), and relevant EU regulations.
        </p>

        <h2 className="text-xl font-bold mb-4">Responsible for Content</h2>
        <p className="mb-4">
          <strong>PastForward Hub</strong>
          <br />
        </p>

        <h2 className="text-xl font-bold mb-4">Legal Form</h2>
        <p className="mb-4">
          Independent collective of professionals working in the fields of archaeology, science communication, and digital humanities. Not yet a registered legal entity.
        </p>

        <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The content on this website has been created with great care. However, no liability is assumed for the accuracy, completeness, or timeliness of the content. External links are provided for reference purposes and remain the responsibility of the respective site owners.
        </p>

        <h2 className="text-xl font-bold mb-4">Copyright</h2>
        <p className="mb-4">
          All texts, images, and illustrations on this site are protected by copyright. Use, reproduction, or redistribution without prior written permission is not permitted.
        </p>

        <p className="text-sm mt-8">Last updated: 27 March 2025</p>
        </div>
      </main>
    </Layout>
  );
}
