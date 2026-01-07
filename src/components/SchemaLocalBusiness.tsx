export default function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Vivic Dental Clinic",
    url: "https://vivicdentalclinic.com",
    telephone: "+2348100670347",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1 Obi Link Drive, off Okpanam Road, opposite 5 Star Restaurant",
      addressLocality: "Asaba",
      addressRegion: "Delta State",
      addressCountry: "NG"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
