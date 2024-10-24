'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, MoreVertical, Flag } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Message {
  id: number
  content: string
  sender: 'customer' | 'garage'
  timestamp: Date
}

export default function Communication() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "cus: Hello, I need a quote for my car service.", sender: 'customer', timestamp: new Date('2024-10-24T10:00:00') },
    { id: 2, content: "gar: What kind of service do you need?", sender: 'garage', timestamp: new Date('2024-10-24T10:05:00') },
    { id: 3, content: "cus: I need an oil change and brake inspection.", sender: 'customer', timestamp: new Date('2024-10-24T10:10:00') },
    { id: 4, content: "gar: Great, I can help you with that. For an oil change and brake inspection, our estimated cost is $150. Would you like to schedule an appointment?", sender: 'garage', timestamp: new Date('2024-10-24T10:15:00') },
  ])
  const [newMessage, setNewMessage] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        content: `cus: ${newMessage}`, // Assuming all new messages are from the customer
        sender: 'customer',
        timestamp: new Date()
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">John Doe</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" style={{ backgroundColor: '#FF6600', color: 'white' }}>
            <Flag className="h-4 w-4 mr-2" />
            Report
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Block User</DropdownMenuItem>
              <DropdownMenuItem>Clear Chat</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div className={`flex items-start max-w-[70%] ${message.sender === 'customer' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar className="w-10 h-10">
                <AvatarImage src={message.sender === 'customer' ? "/customer-avatar.png" : "/garage-avatar.png"} />
                <AvatarFallback>{message.sender === 'customer' ? 'C' : 'G'}</AvatarFallback>
              </Avatar>
              <div className={`mx-2 ${message.sender === 'customer' ? 'text-right' : 'text-left'}`}>
                <div className={`p-3 rounded-lg inline-block ${message.sender === 'customer' ? 'bg-[#FF6600] text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.content.substring(message.content.indexOf(':') + 1).trim()}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} style={{ backgroundColor: '#FF6600', color: 'white' }}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}