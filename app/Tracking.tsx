import Script from 'next/script.js';

const googleAnalyticsTrackingId = "G-SCVEJHGNJH";
const facebookPixelId = "1490857982071068";

export default function Tracking() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 2000,
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsTrackingId}');
            `,
        }}
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
      />
      {/* CookieYes */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/0f4fee92940a01b08b956865/script.js"
      />
      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${facebookPixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1" />`,
        }}
      />
    </>
  );
}
