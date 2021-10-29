import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Douglas Pinheiro Goulart</Text>
          <Text color="gray.300" fontSize="small">
            douglaspigoulart@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Douglas Goulart" src="https://github.com/doougui.png" />
    </Flex>
  );
}