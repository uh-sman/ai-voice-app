"use client";

import React, { useEffect, useState } from "react";

// ElevenLabs
import { useConversation } from "@11labs/react";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

const VoiceChat = () => {
  const conversation = useConversation();
  const { status, isSpeaking } = conversation;
  const [isMuted, setIsMuted] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleStartConversation = async () => {
    // Add logic to start the conversation
    const conversationId = await conversation.startSession({
      agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
    });
    console.log("started conversation")
  };

  const handleEndConversation = async () => {
    // Add logic to end the conversation

  };

  const toggleMute = async () => {
    // Add logic to mute the sound
  };

  useEffect(() => {
    const requestMicPermission = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
      } catch (error) {
        setErrorMessage((error as Error).message)
        console.log("Error accessing microphone: ", error)
      }
    };
    requestMicPermission();
  },[])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Voice Chat
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={toggleMute}>
              <VolumeX className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            {
              
            }
            <Button
            variant={"destructive"}
              onClick={handleEndConversation}
              className="w-full"
            >
              <Mic className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>
            <Button
              onClick={handleStartConversation}
              disabled={false}
              className="w-full"
            >
              <Mic className="mr-2 h-4 w-4" />
              Start Conversation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceChat;
