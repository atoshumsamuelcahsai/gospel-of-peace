#!/bin/bash

echo "🚀 Setting up Sanity CMS for Gospel of Peace Church"
echo ""

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Installing Sanity CLI..."
    npm install -g @sanity/cli
fi

echo "🔧 Sanity CMS Setup Instructions:"
echo ""
echo "1. Create a Sanity project:"
echo "   Run: sanity init --create-project 'Gospel of Peace Church'"
echo ""
echo "2. Choose the following options:"
echo "   - Use the default dataset configuration? Yes"
echo "   - Project output path: ./sanity"
echo "   - Template: Blog (schema) or Clean project with no predefined schemas"
echo ""
echo "3. Update the project ID in these files:"
echo "   - sanity.config.ts"
echo "   - lib/sanity.ts"
echo ""
echo "4. Start Sanity Studio:"
echo "   Run: sanity start"
echo ""
echo "5. Create your first footer content document in the Sanity Studio"
echo ""
echo "📝 Next steps:"
echo "   - Replace 'your-project-id' in sanity.config.ts and lib/sanity.ts"
echo "   - Run 'sanity start' to open the Sanity Studio"
echo "   - Create a footer content document with language 'en'"
echo "   - Add your church information"
echo ""
echo "🌍 For i18n support in the future:"
echo "   - Create additional footer content documents for other languages"
echo "   - Update the getFooterContent function to handle language switching"
echo "   - Implement language detection/switching in your app"
echo ""
echo "✅ Setup complete! Follow the instructions above to configure your Sanity project."

