"use client";

import {
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Text,
    TextField,
} from "@radix-ui/themes";

import {
    BsGithub
} from 'react-icons/bs';

import NextLink from "next/link";
import { signup } from "~/server/lib/auth";

export default function Page() {
    return (
        <div className="flex h-full w-full flex-1 flex-col items-center 
        justify-center overflow-scroll">
            <div className="w-[400px]">
                <Card size={"4"} variant="surface" style={{ width: "400px" }}>
                    <Heading size={"6"} mb="6">
                        Create an Account
                    </Heading>
                    <form action={signup}>
                        <Box mb={"5"}>
                            <Text size={"2"} weight="medium" mb={"1"}>
                                First Name
                            </Text>
                            <TextField.Root
                                size={"2"}
                                variant="surface"
                                name="firstname"
                                placeholder="Enter your first name"
                                required
                            />
                        </Box>
                        <Box mb={"5"}>
                            <Text size={"2"} weight="medium" mb={"1"}>
                                Last Name
                            </Text>
                            <TextField.Root
                                size={"2"}
                                variant="surface"
                                name="lastname"
                                placeholder="Enter your last name"
                                required
                            />
                        </Box>
                        <Box mb={"5"}>
                            <Text size={"2"} weight="medium" mb={"1"}>
                                Email
                            </Text>
                            <TextField.Root
                                size={"2"}
                                variant="surface"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Box>
                        <Box mb={"5"}>
                            <Text size={"2"} weight="medium" mb={"1"}>
                                Username
                            </Text>
                            <TextField.Root
                                size={"2"}
                                variant="surface"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                        </Box>
                        <Box mb={"5"} position="relative">
                            <Text size={"2"} weight="medium" mb={"1"}>
                                Password
                            </Text>
                            <TextField.Root
                                size={"2"}
                                variant="surface"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                                required
                            />
                        </Box>
                        <Flex justify="end" gap={"3"} mt={"6"}>
                            <NextLink href="/sign-in">
                                <Button size={"2"} variant="soft">
                                    I already have an account
                                </Button>
                            </NextLink>
                            <Button size={"2"} variant="solid">
                                Continue
                            </Button>
                        </Flex>
                    </form>
                </Card>
            </div>
            <Text className="font-bold pt-2">
                or sign-up with...
            </Text>
            <NextLink href="/sign-up/github">
                <div className="p-2 
						rounded-lg fill-current
						hover:text-neutral-400 transition-colors 
						duration-300 text-5xl">
                    <BsGithub />
                </div>
            </NextLink>
        </div>
    );
}
