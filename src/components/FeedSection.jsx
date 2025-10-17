import { useState, useEffect, useRef } from 'react';
import "./FeedSection.css";
import { FaHeart, FaComment, FaPlus, FaTrash } from "react-icons/fa";
import singleImage from "../assets/single-image.jpg";
import handsome from "../assets/handsome.jpg";
import good from "../assets/good.jpg";
import photo from "../assets/photo.jpg";

const FeedSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: good,
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      image: singleImage,
      likes: 5000,
      comments: 2000,
    },
    {
      id: 3,
      image: handsome,
      likes: 132,
      comments: 9,
    },
    {
      id: 4,
      image: singleImage,
      likes: 320,
      comments: 25,
    },
    {
      id: 5,
      image: photo,
      likes: 89,
      comments: 5,
    },
    // Add more posts if needed for testing
    {
      id: 6,
      image: good,
      likes: 150,
      comments: 10,
    },
    {
      id: 7,
      image: handsome,
      likes: 200,
      comments: 15,
    },
    {
      id: 8,
      image: photo,
      likes: 300,
      comments: 20,
    },
  ]);

  const [objectURLs, setObjectURLs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial: 2 rows x 3 columns
  const feedRef = useRef(null); // Ref for the feed container

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this post?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, comments: post.comments + 1 } : post
      )
    );
  };

  const handlePostUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file.");
        return;
      }

      const newImageURL = URL.createObjectURL(file);
      setObjectURLs((prev) => [...prev, newImageURL]);

      const newPost = {
        id: posts.length + 1,
        image: newImageURL,
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
    } else {
      console.error("No file selected.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (feedRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = feedRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          // Near the bottom
          setVisibleCount((prevCount) => prevCount + 6); // Load 6 more posts (another 2 rows)
        }
      }
    };

    const feedElement = feedRef.current;
    if (feedElement) {
      feedElement.addEventListener("scroll", handleScroll);
      return () => feedElement.removeEventListener("scroll", handleScroll);
    }
  }, [posts]); // Re-run if posts change

  useEffect(() => {
    return () => {
      objectURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [objectURLs]);

  return (
    <section className="feed-section">
      <div className="feed-header">
        <h2>Traveler’s Feed</h2>
        <label className="upload-btn" htmlFor="fileUpload">
          <FaPlus /> Post Your Photo
        </label>
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handlePostUpload}
        />
      </div>

      <div
        className="feed-grid"
        ref={feedRef}
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        {" "}
        {/* Make it scrollable */}
        {posts.slice(0, visibleCount).map((post) => (
          <div key={post.id} className="feed-card">
            <img src={post.image} alt={`Tourist post ${post.id}`} />
            <div className="overlay">
              <div className="overlay-icons">
                <span
                  onClick={() => handleLike(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  <FaHeart /> {post.likes}
                </span>
                <span
                  onClick={() => handleComment(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  <FaComment /> {post.comments}
                </span>
                <span
                  onClick={() => handleRemove(post.id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  <FaTrash /> Remove
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedSection;