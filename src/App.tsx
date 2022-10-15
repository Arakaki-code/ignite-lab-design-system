import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import { SignIn } from "./pages/Signin";
import "./styles/global.css";

export function App() {
  return (
    <SignIn />
  );
}
