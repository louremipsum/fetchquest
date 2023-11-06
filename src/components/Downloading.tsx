import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Image,
  Paper,
  Progress,
} from "@mantine/core";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import React from "react";

function Downloading() {
  return (
    <>
      <Progress value={50} size={"lg"} animate />
      <Paper shadow="xs" p="md" w={"60vw"}>
        <Flex>
          <Image />
          <Flex>
            <Group>
              <ActionIcon variant="filled">
                <IconPlayerPauseFilled />
              </ActionIcon>
              <ActionIcon variant="filled">
                <IconPlayerPlayFilled />
              </ActionIcon>
              <Button
                c={"red"}
                variant="outline"
                style={{ border: "red 1px solid" }}
              >
                Cancel
              </Button>
            </Group>
          </Flex>
        </Flex>
      </Paper>
    </>
  );
}

export default Downloading;
