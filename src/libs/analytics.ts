/* eslint-disable @typescript-eslint/no-unsafe-call */

export const GA_TRACKING_ID = 'UA-97608334-3' as const;

export const trackPageview = (url: string): void => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};

type TrackEventProps = {
  action: string;
  category?: string;
  label?: string;
  value?: string | number;
};

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: TrackEventProps): void => {
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};

/* eslint-enable @typescript-eslint/no-unsafe-call */
