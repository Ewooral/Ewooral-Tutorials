#!/usr/bin/env python3
"""
Simple Puppeteer Example
A minimal script to get started with pyppeteer
"""

import asyncio
from pyppeteer import launch

async def simple_example():
    """A simple example that takes a screenshot and extracts some text"""
    
    # Launch browser using system Chrome
    browser = await launch(
        headless=True,  # Set to False to see the browser
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Set viewport size
    await page.setViewport({'width': 1280, 'height': 720})
    
    # Navigate to a website
    print("Navigating to Python.org...")
    await page.goto('https://www.python.org')
    
    # Wait for the page to load
    await page.waitForSelector('h1')
    
    # Extract the title
    title = await page.title()
    print(f"Page title: {title}")
    
    # Extract some text from the page
    welcome_text = await page.evaluate('''() => {
        const element = document.querySelector('h1');
        return element ? element.innerText : 'No h1 found';
    }''')
    print(f"Welcome text: {welcome_text}")
    
    # Take a screenshot
    await page.screenshot({'path': 'python_org_screenshot.png', 'fullPage': True})
    print("Screenshot saved as 'python_org_screenshot.png'")
    
    # Close browser
    await browser.close()
    print("Done!")

if __name__ == "__main__":
    print("Starting simple Puppeteer example...")
    asyncio.run(simple_example())
