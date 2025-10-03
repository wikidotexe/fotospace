const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5">
      <p className="text-lg font-medium text-center">Techstack Used by</p>
      <div className="mt-10 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
        {/* Notion */}
        <img src="/images/cloudflare.png" alt="Cloudflare" className="h-10 w-auto" />

        {/* Stripe */}
        <img src="/images/redhat.png" alt="Cloudflare" className="h-12 w-auto" />

        {/* Dropbox */}
        <img src="/images/zerossl.png" alt="Cloudflare" className="h-20 w-auto" />

        {/* Shopify */}
        <img src="/images/immich.png" alt="Cloudflare" className="h-10 w-auto" />

        {/* Slack */}
        <img src="/images/mikrotik.png" alt="Cloudflare" className="h-20 w-auto" />
      </div>
    </section>
  );
};

export default Logos;
