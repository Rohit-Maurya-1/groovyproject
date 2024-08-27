const fetchInstagramPosts = async (accessToken) => {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp&access_token=${accessToken}`
    );
    const data = await response.json();
    return data.data;
  };
  
  export default fetchInstagramPosts;
  