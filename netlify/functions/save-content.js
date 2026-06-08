exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { contentData } = JSON.parse(event.body);
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const repo = 'johnlaterrasse/johnrozenblum-portfolio';
    const filePath = 'data/content.json';
    const branch = 'main';

    // Get the current file SHA
    const getResponse = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`,
      {
        headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
      }
    );

    if (!getResponse.ok) {
      throw new Error(`Failed to get file: ${getResponse.statusText}`);
    }

    const getData = await getResponse.json();
    const sha = getData.sha;

    // Create base64 encoded content
    const content = Buffer.from(JSON.stringify(contentData, null, 2)).toString('base64');

    // Commit to GitHub
    const putResponse = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Update content via admin panel',
          content: content,
          sha: sha,
          branch: branch
        })
      }
    );

    if (!putResponse.ok) {
      throw new Error(`GitHub error: ${putResponse.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Content saved successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
