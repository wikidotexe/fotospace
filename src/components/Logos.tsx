const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5">
      <p className="text-lg font-medium text-center">Technology Used by</p>
      <div className="mt-10 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 logos-container">
        {/* CLoudflare */}
        <img src="/images/cloudflare.png" alt="Cloudflare" className="h-10 w-auto" />

        {/* ZeroSSL */}
        <img src="/images/zerossl.png" alt="ZeroSSL" className="h-20 w-auto" />

        {/* Dell */}
        <img src="/images/dell.png" alt="Dell" className="h-12 w-auto" />

        {/* Mikrotik */}
        <img src="/images/mikrotik.png" alt="Mikrotik" className="h-20 w-auto" />

        {/* RedHat */}
        <img src="/images/redhat.png" alt="RedHat" className="h-12 w-auto" />

        {/* Immich */}
        <img src="/images/immich.png" alt="Immich" className="h-10 w-auto" />
      </div>
    </section>
  );
};

export default Logos;
