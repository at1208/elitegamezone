import BlogSmallCard from "../components/Blog/Cards/Small";
import BlogMediumCard from "../components/Blog/Cards/Medium";
import AuthorCard from "../components/Blog/Cards/Author";
import TrendingCard from "../components/Blog/Cards/Trending";

export function capitalize(input) {
  var words = input.split(" ");
  var CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(
      element[0].toUpperCase() + element.slice(1, element.length)
    );
  });
  return CapitalizedWords.join(" ");
}

export function SmallblogList(smallBlogs) {
  if (smallBlogs) {
    return smallBlogs.map((blog, i) => {
      return <BlogSmallCard blog={blog} key={i} />;
    });
  } else {
    return <> </>;
  }
}

export function MediumblogList(mediumBlogs) {
  if (mediumBlogs) {
    return mediumBlogs.map((blog, i) => {
      return <BlogMediumCard blog={blog} key={i} />;
    });
  } else {
    return <></>;
  }
}

export function AuthorList(authors) {
  if (authors) {
    return authors.map((author, i) => {
      return <AuthorCard author={author} key={i} />;
    });
  } else {
    return <></>;
  }
}

export function TrendingList(trendingBlogs) {
  if (trendingBlogs) {
    return trendingBlogs.map((blog, i) => {
      return <TrendingCard blog={blog} key={i} count={i} />;
    });
  } else {
    return <></>;
  }
}

export function ShowMoreBlogs(loadedBlogs) {
  if (loadedBlogs) {
    return loadedBlogs.map((blog, i) => {
      return <BlogMediumCard blog={blog} key={i} />;
    });
  } else {
    return <></>;
  }
}
