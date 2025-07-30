#!/usr/bin/env python3
"""
Demo CLI Chatbot - Works without OpenAI API key for testing
Usage: python chatbot_demo.py
"""

import argparse
import random
import time

class DemoChatBot:
    def __init__(self):
        """Initialize the demo chatbot"""
        self.conversation_history = []
        self.demo_responses = [
            "Hello! I'm a demo AI assistant. I can help you with various questions and tasks.",
            "That's an interesting question! In a real implementation, I would use OpenAI's API to provide intelligent responses.",
            "I understand what you're asking. This demo shows how the chatbot interface works.",
            "Great question! The actual chatbot would analyze your input and provide relevant, helpful responses.",
            "I'm here to help! This demo version simulates the conversation flow you'd have with the real AI.",
            "Thanks for trying out the chatbot demo! The real version would provide much more sophisticated responses.",
        ]
    
    def chat(self, message):
        """Simulate a chat response"""
        try:
            # Add user message to history
            self.conversation_history.append({"role": "user", "content": message})
            
            # Simulate processing time
            time.sleep(0.5)
            
            # Generate a demo response
            if "hello" in message.lower() or "hi" in message.lower():
                response = "Hello! I'm a demo AI chatbot. I'm here to show you how the interface works!"
            elif "name" in message.lower() or "who are you" in message.lower():
                response = "I'm a demo version of your CLI chatbot. The real version would use OpenAI's API for intelligent responses."
            elif "help" in message.lower():
                response = "I can help demonstrate the chatbot interface! Try asking me questions to see how it works."
            else:
                response = random.choice(self.demo_responses)
            
            # Add response to history
            self.conversation_history.append({"role": "assistant", "content": response})
            
            return response
            
        except Exception as e:
            return f"Demo Error: {str(e)}"
    
    def start_interactive_session(self):
        """Start an interactive demo chat session"""
        print("🤖 CLI Chatbot Demo (No API Key Required)")
        print("This demo shows how your OpenAI chatbot would work!")
        print("Type 'quit', 'exit', or 'bye' to end the session")
        print("Type 'clear' to clear conversation history")
        print("-" * 50)
        
        while True:
            try:
                user_input = input("\n👤 You: ").strip()
                
                if user_input.lower() in ['quit', 'exit', 'bye']:
                    print("👋 Thanks for trying the demo!")
                    break
                
                if user_input.lower() == 'clear':
                    self.conversation_history = []
                    print("🧹 Conversation history cleared!")
                    continue
                
                if not user_input:
                    continue
                
                print("🤖 Bot: ", end="", flush=True)
                response = self.chat(user_input)
                print(response)
                
            except KeyboardInterrupt:
                print("\n👋 Thanks for trying the demo!")
                break
            except EOFError:
                print("\n👋 Thanks for trying the demo!")
                break

def main():
    parser = argparse.ArgumentParser(description="Demo CLI Chatbot (No API Key Required)")
    parser.add_argument("--message", "-m", help="Send a single message instead of interactive mode")
    
    args = parser.parse_args()
    
    # Initialize demo chatbot
    chatbot = DemoChatBot()
    
    if args.message:
        # Single message mode
        response = chatbot.chat(args.message)
        print(response)
    else:
        # Interactive mode
        chatbot.start_interactive_session()

if __name__ == "__main__":
    main()
