import React, { Component } from 'react';
import { Animated, Easing, PanResponderInstance, ViewStyle } from 'react-native';

export interface SwipeableProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftButtons?: React.ReactNode[];
  rightButtons?: React.ReactNode[];

  onLeftActionActivate?: () => void;
  onLeftActionDeactivate?: () => void;
  onLeftActionRelease?: () => void;
  onLeftActionComplete?: () => void;
  leftActionActivationDistance?: number;
  leftActionReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  leftActionReleaseAnimationConfig?: object;

  onRightActionActivate?: () => void;
  onRightActionDeactivate?: () => void;
  onRightActionRelease?: () => void;
  onRightActionComplete?: () => void;
  rightActionActivationDistance?: number;
  rightActionReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  rightActionReleaseAnimationConfig?: object;

  onLeftButtonsActivate?: () => void;
  onLeftButtonsDeactivate?: () => void;
  onLeftButtonsOpenRelease?: () => void;
  onLeftButtonsOpenComplete?: () => void;
  onLeftButtonsCloseRelease?: () => void;
  onLeftButtonsCloseComplete?: () => void;
  leftButtonWidth?: number;
  leftButtonsActivationDistance?: number;
  leftButtonsOpenReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  leftButtonsOpenReleaseAnimationConfig?: object;
  leftButtonsCloseReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  leftButtonsCloseReleaseAnimationConfig?: object;

  onRightButtonsActivate?: () => void;
  onRightButtonsDeactivate?: () => void;
  onRightButtonsOpenRelease?: () => void;
  onRightButtonsOpenComplete?: () => void;
  onRightButtonsCloseRelease?: () => void;
  onRightButtonsCloseComplete?: () => void;
  rightButtonWidth?: number;
  rightButtonsActivationDistance?: number;
  rightButtonsOpenReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  rightButtonsOpenReleaseAnimationConfig?: object;
  rightButtonsCloseReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  rightButtonsCloseReleaseAnimationConfig?: object;

  onSwipeStart?: () => void;
  onSwipeMove?: () => void;
  onSwipeRelease?: () => void;
  onSwipeComplete?: () => void;
  swipeReleaseAnimationFn?: (value: Animated.ValueXY, config: object) => Animated.CompositeAnimation;
  swipeReleaseAnimationConfig?: {
    toValue: { x: number; y: number };
    duration: number;
    easing: (value: number) => number;
    useNativeDriver: boolean;
  };

  onRef?: () => void;
  onPanAnimatedValueRef?: () => void;
  swipeStartMinDistance?: number;

  leftContainerStyle?: ViewStyle;
  leftButtonContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
  rightButtonContainerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

export default class Swipeable extends Component<SwipeableProps> {}
