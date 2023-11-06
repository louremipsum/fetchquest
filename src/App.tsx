import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import Downloading from "./components/Downloading";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [link, setLink] = useState("");
  return (
    <Stack align="center" mt={"xl"}>
      <Group position="apart">
        <Text>Fetch Quest</Text>
        <ThemeToggle />
      </Group>
      <Text c={"dark"} fz={"sm"}>
        Enter a download URL to get started
      </Text>
      <Group>
        <TextInput
          placeholder="enter a link which ends with an extension"
          w={"60vw"}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button>Download</Button>
      </Group>
      <Downloading />
    </Stack>
  );
}

export default App;
