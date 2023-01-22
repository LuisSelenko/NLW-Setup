import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();
  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito 😥{" "}
      <Text
        className="text-base text-violet-500 underline active:text-violet-400"
        onPress={() => navigate("new")}
      >
        Comece criando um novo hábito
      </Text>
    </Text>
  );
}
