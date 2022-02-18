import { Analytics } from 'analytics';
import segmentPlugin from '@analytics/segment';
import googleAnalyticsPlugin from '@analytics/google-analytics';

const segmentKey = process.env.SEGMENT_ID || 'test';
const gaId = process.env.GA_UA_ID || 'test';

export const analytics = new Analytics({
  app: 'Uniform Optimize Contentful Nuxt Starter',
  debug: true,
  plugins: [
    segmentPlugin({
      writeKey: segmentKey,
    }),

    googleAnalyticsPlugin({
      trackingId: gaId,
      customDimensions: {
        strongestIntentMatch: 'dimension1',
        allIntentMatches: 'dimension2',
      },
    }),
  ],
});

export default ({ app }, inject) => {
  inject('uniformOptimizeTrackerAnalytics', analytics);
};
