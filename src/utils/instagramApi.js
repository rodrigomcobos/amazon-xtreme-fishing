export async function fetchInstagramPosts() {
  const ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_ID = import.meta.env.VITE_INSTAGRAM_ACCOUNT_ID;

  if (!ACCESS_TOKEN || !INSTAGRAM_ID) {
    throw new Error('Missing Instagram credentials in environment variables');
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/v18.0/${INSTAGRAM_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}&limit=10`
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.data;
  } catch (error) {
    console.error('Instagram API Error:', error);
    throw error;
  }
}
