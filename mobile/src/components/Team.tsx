import { HStack } from "native-base";
import CountryFlag from "react-native-country-flag";
import { GameProps } from "./Game";

import { Input } from "./Input";

interface Props {
  code: string;
  position: "left" | "right";
  value: string;
  game: GameProps;
  onChangeText: (value: string) => void;
}

export function Team({ code, position, onChangeText, game, value }: Props) {
  return (
    <HStack alignItems="center">
      {position === "left" && (
        <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
      )}

      <Input
        w={10}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        value={value}
        isDisabled={game.guess !== null}
        onChangeText={onChangeText}
      />

      {position === "right" && (
        <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
      )}
    </HStack>
  );
}
