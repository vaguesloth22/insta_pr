import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold text-light-200">Hello World</Text>
      <Link href="/home/third" push asChild>
        <Button
          title="Push to /third"
        />
      </Link>
    </View>
  );
}
