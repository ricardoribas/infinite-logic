import React from 'react';
import {
  BannerAd,
  InterstitialAd,
  RewardedAd,
  TestIds,
  BannerAdSize,
  FirebaseAdMobTypes,
  AdEventType,
  RewardedAdEventType
} from '@react-native-firebase/admob';

type AdProps = {
  onAdLoaded?: Function;
  onAdFailedToLoad?: Function;
  onAdRewarded?: Function;
};

export const Banner: (props: AdProps) => JSX.Element = ({
  onAdLoaded,
  onAdFailedToLoad
}: AdProps) => {
  return (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true
      }}
      onAdLoaded={onAdLoaded}
      onAdFailedToLoad={onAdFailedToLoad}
    />
  );
};

let currentInterstitialInstance: FirebaseAdMobTypes.InterstitialAd;

export function createInterstitialAdRequest(props: AdProps): void {
  currentInterstitialInstance = InterstitialAd.createForAdRequest(
    TestIds.INTERSTITIAL,
    {
      requestNonPersonalizedAdsOnly: true
    }
  );

  currentInterstitialInstance.onAdEvent((type) => {
    if (type === AdEventType.LOADED) {
      props.onAdLoaded && props.onAdLoaded();
      currentInterstitialInstance.show();
    } else if (type === AdEventType.ERROR) {
      props.onAdFailedToLoad && props.onAdFailedToLoad();
    }
  });
}

export function loadInterstitial(): void {
  currentInterstitialInstance.load();
}

let currentRewardedInstance: FirebaseAdMobTypes.RewardedAd;

export function createRewardedAdRequest(props: AdProps): void {
  currentRewardedInstance = RewardedAd.createForAdRequest(TestIds.REWARDED, {
    requestNonPersonalizedAdsOnly: true
  });

  currentRewardedInstance.onAdEvent((type, error, reward) => {
    if (type === RewardedAdEventType.LOADED) {
      props.onAdLoaded && props.onAdLoaded();
      currentRewardedInstance.show();
    }

    if (type === RewardedAdEventType.EARNED_REWARD) {
      props.onAdRewarded && props.onAdRewarded(reward);
    }

    if (error) {
      props.onAdFailedToLoad && props.onAdFailedToLoad(error);
    }
  });
}

export function loadRewarded(): void {
  currentRewardedInstance.load();
}
