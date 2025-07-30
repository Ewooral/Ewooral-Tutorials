#!/usr/bin/env python3
"""
Puppeteer Demo Script in Python
This script demonstrates various Puppeteer capabilities using pyppeteer
"""

import asyncio
from pyppeteer import launch
import json
import os

async def basic_screenshot_demo():
    """Take a screenshot of a webpage"""
    print("🚀 Starting basic screenshot demo...")
    
    browser = await launch(
        headless=True,
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Navigate to a webpage
    await page.goto('https://example.com')
    
    # Take a screenshot
    await page.screenshot({'path': 'example_screenshot.png'})
    print("✅ Screenshot saved as 'example_screenshot.png'")
    
    await browser.close()

async def web_scraping_demo():
    """Scrape data from a webpage"""
    print("🕷️ Starting web scraping demo...")
    
    browser = await launch(
        headless=True,
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Navigate to a webpage
    await page.goto('https://quotes.toscrape.com/')
    
    # Extract quotes
    quotes = await page.evaluate('''() => {
        const quoteElements = document.querySelectorAll('.quote');
        return Array.from(quoteElements).map(quote => ({
            text: quote.querySelector('.text').innerText,
            author: quote.querySelector('.author').innerText,
            tags: Array.from(quote.querySelectorAll('.tag')).map(tag => tag.innerText)
        }));
    }''')
    
    print(f"✅ Scraped {len(quotes)} quotes:")
    for i, quote in enumerate(quotes[:3], 1):  # Show first 3 quotes
        print(f"\n{i}. {quote['text']}")
        print(f"   - {quote['author']}")
        print(f"   Tags: {', '.join(quote['tags'])}")
    
    # Save to JSON file
    with open('scraped_quotes.json', 'w', encoding='utf-8') as f:
        json.dump(quotes, f, indent=2, ensure_ascii=False)
    print("✅ All quotes saved to 'scraped_quotes.json'")
    
    await browser.close()

async def pdf_generation_demo():
    """Generate PDF from a webpage"""
    print("📄 Starting PDF generation demo...")
    
    browser = await launch(
        headless=True,
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Create a simple HTML content
    html_content = '''
    <html>
    <head>
        <title>Puppeteer PDF Demo</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #333; }
            .section { margin: 20px 0; }
            .highlight { background-color: #f0f8ff; padding: 10px; border-radius: 5px; }
        </style>
    </head>
    <body>
        <h1>🎭 Puppeteer PDF Demo</h1>
        <div class="section">
            <h2>What is Puppeteer?</h2>
            <p>Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium browsers.</p>
        </div>
        <div class="section highlight">
            <h2>Python Implementation</h2>
            <p>This document was generated using <strong>pyppeteer</strong>, the Python port of Puppeteer!</p>
            <ul>
                <li>Web scraping</li>
                <li>PDF generation</li>
                <li>Screenshot capture</li>
                <li>Form automation</li>
            </ul>
        </div>
    </body>
    </html>
    '''
    
    await page.setContent(html_content)
    
    # Generate PDF
    await page.pdf({
        'path': 'puppeteer_demo.pdf',
        'format': 'A4',
        'printBackground': True,
        'margin': {
            'top': '1cm',
            'right': '1cm',
            'bottom': '1cm',
            'left': '1cm'
        }
    })
    
    print("✅ PDF saved as 'puppeteer_demo.pdf'")
    await browser.close()

async def form_automation_demo():
    """Automate form filling"""
    print("📝 Starting form automation demo...")
    
    browser = await launch(
        headless=True,
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Navigate to a form page
    await page.goto('https://httpbin.org/forms/post')
    
    # Fill out the form
    await page.type('input[name="custname"]', 'John Doe')
    await page.type('input[name="custtel"]', '123-456-7890')
    await page.type('input[name="custemail"]', 'john@example.com')
    await page.select('select[name="size"]', 'medium')
    await page.click('input[name="topping"][value="bacon"]')
    await page.type('textarea[name="comments"]', 'This is a test comment from Puppeteer!')
    
    # Take a screenshot of the filled form
    await page.screenshot({'path': 'filled_form.png'})
    print("✅ Form filled and screenshot saved as 'filled_form.png'")
    
    # Submit the form (commented out to avoid actual submission)
    # await page.click('input[type="submit"]')
    # print("✅ Form submitted!")
    
    await browser.close()

async def performance_monitoring_demo():
    """Monitor page performance"""
    print("⚡ Starting performance monitoring demo...")
    
    browser = await launch(
        headless=True,
        executablePath='/usr/bin/google-chrome',
        args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    page = await browser.newPage()
    
    # Start measuring performance
    await page.tracing.start({'path': 'trace.json'})
    
    start_time = asyncio.get_event_loop().time()
    await page.goto('https://example.com')
    load_time = asyncio.get_event_loop().time() - start_time
    
    await page.tracing.stop()
    
    print(f"✅ Page loaded in {load_time:.2f} seconds")
    print("✅ Performance trace saved as 'trace.json'")
    
    await browser.close()

async def main():
    """Run all demos"""
    print("🎭 Welcome to Puppeteer Python Demo!")
    print("=" * 50)
    
    try:
        await basic_screenshot_demo()
        print("\n" + "=" * 50)
        
        await web_scraping_demo()
        print("\n" + "=" * 50)
        
        await pdf_generation_demo()
        print("\n" + "=" * 50)
        
        await form_automation_demo()
        print("\n" + "=" * 50)
        
        await performance_monitoring_demo()
        print("\n" + "=" * 50)
        
        print("🎉 All demos completed successfully!")
        print("\nGenerated files:")
        files = ['example_screenshot.png', 'scraped_quotes.json', 'puppeteer_demo.pdf', 'filled_form.png', 'trace.json']
        for file in files:
            if os.path.exists(file):
                print(f"  ✅ {file}")
    
    except Exception as e:
        print(f"❌ Error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())
