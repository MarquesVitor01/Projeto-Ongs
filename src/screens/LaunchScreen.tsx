import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import { useEffect, useRef } from "react";
import ButtonLaunch from "../components/ButtonLaunch";
import { useRouter } from "expo-router";

export default function LaunchScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogin = () => router.push("/login");
  const handleSignUp = () => router.push("/login");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.Image
          source={require("../../assets/images/logo.png")}
          style={[
            styles.logo,
            {
              transform: [{ scale: scaleAnim }],
              opacity: fadeAnim,
            },
          ]}
          resizeMode="contain"
        />
        <Animated.Text style={[styles.textLogo, { opacity: fadeAnim }]}>
          Jogada Certa
        </Animated.Text>
        <Animated.Text
          style={[
            styles.textIndice,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          Controle suas finanças de forma simples {"\n"} e eficiente com o
          FinWise.
        </Animated.Text>

        <Animated.View style={[styles.buttonsContainer, { opacity: fadeAnim }]}>
          <ButtonLaunch title="Log In" onPress={handleLogin} />
          <ButtonLaunch
            title="Sign Up"
            onPress={handleSignUp}
            variant="secondary"
          />
        </Animated.View>

        <Animated.Text style={[styles.textRecuperar, { opacity: fadeAnim }]}>
          Esqueceu a Senha?
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  textLogo: {
    fontFamily: "Poppins",
    color: "#16232C",
    fontSize: 48,
    fontWeight: "600",
    marginBottom: 10,
  },
  textIndice: {
    color: "#4B4544",
    fontFamily: "League Spartan",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    marginTop: 25,
    gap: 12,
  },
  textRecuperar: {
    marginTop: 20,
    color: "#093030",
    fontFamily: "League Spartan",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
});
