#!/usr/bin/env python3
"""
Simple CLI Chatbot using OpenAI API
Usage: python chatbot.py
"""

import os
import sys
from openai import OpenAI
import argparse

class CLIChatBot:
    def __init__(self, api_key=None):
        """Initialize the chatbot with OpenAI API key"""
        if api_key:
            self.client = OpenAI(api_key=api_key)
        else:
            # Try to get from environment variable
            api_key = os.getenv('OPENAI_API_KEY')
            if not api_key:
                print("Error: OpenAI API key not found.")
                print("Please set OPENAI_API_KEY environment variable or pass it as argument.")
                sys.exit(1)
            self.client = OpenAI(api_key=api_key)
        
        self.conversation_history = []
    
    def chat(self, message):
        """Send a message to OpenAI and get response"""
        try:
            # Add user message to history
            self.conversation_history.append({"role": "user", "content": message})
            
            # Get response from OpenAI
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=self.conversation_history,
                max_tokens=1000,
                temperature=0.7
            )
            
            # Extract the response
            assistant_message = response.choices[0].message.content
            
            # Add assistant response to history
            self.conversation_history.append({"role": "assistant", "content": assistant_message})
            
            return assistant_message
            
        except Exception as e:
            return f"Error: {str(e)}"
    
    def start_interactive_session(self):
        """Start an interactive chat session"""
        print("🤖 CLI Chatbot (OpenAI GPT-3.5)")
        print("Type 'quit', 'exit', or 'bye' to end the session")
        print("Type 'clear' to clear conversation history")
        print("-" * 50)
        
        while True:
            try:
                user_input = input("\n👤 You: ").strip()
                
                if user_input.lower() in ['quit', 'exit', 'bye']:
                    print("👋 Goodbye!")
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
                print("\n👋 Goodbye!")
                break
            except EOFError:
                print("\n👋 Goodbye!")
                break

def main():
    parser = argparse.ArgumentParser(description="CLI Chatbot using OpenAI API")
    parser.add_argument("--api-key", help="OpenAI API key (alternatively set OPENAI_API_KEY env var)")
    parser.add_argument("--message", "-m", help="Send a single message instead of interactive mode")
    
    args = parser.parse_args()
    
    # Initialize chatbot
    chatbot = CLIChatBot(api_key=args.api_key)
    
    if args.message:
        # Single message mode
        response = chatbot.chat(args.message)
        print(response)
    else:
        # Interactive mode
        chatbot.start_interactive_session()

if __name__ == "__main__":
    main()
