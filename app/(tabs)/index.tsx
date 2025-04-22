import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import LaunchScreen from "./launch";

export default function Index() {
  const [showLaunch, setShowLaunch] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1.5)).current;
  const bgColorAnim = useRef(new Animated.Value(0)).current;
  const launchOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(bgColorAnim, {
        toValue: 1,
        duration: 2000, // aumento da duração para transição mais suave
        easing: Easing.inOut(Easing.ease), // curva de animação mais suave
        useNativeDriver: false, // cor não é animada via native driver
      }),
    ]).start(() => {
      setShowLaunch(true);
      Animated.timing(launchOpacity, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const bgColorInterpolate = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#16232C", "#f2f2f2"], // Transição gradual entre as cores
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={[styles.container, { backgroundColor: bgColorInterpolate }]}
      >
        <Animated.Image
          source={require("../../assets/images/logo.png")}
          style={[
            styles.logo,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
          resizeMode="contain"
        />
        {/* <Animated.Text
          style={[styles.textLogo, { transform: [{ scale: scaleAnim }] }]}
        >
        </Animated.Text> */}

        {showLaunch && (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity: launchOpacity,
              backgroundColor: "transparent",
            }}
          >
            <LaunchScreen />
          </Animated.View>
        )}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  textLogo: {
    fontFamily: "Poppins",
    color: "#ffffff",
    fontSize: 48,
    fontWeight: "600",
    marginTop: 20,
  },
});
