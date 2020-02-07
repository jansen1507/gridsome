<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <p>I have this many posts: {{ $page.allPost.totalCount }}</p>

    <div class="posts" v-for="post in $page.allPost.edges" :key="post.node.id">
      <g-link :to="post.node.path">
        <div class="card">
          <h2>{{ post.node.title }}</h2>
        </div>
        </g-link>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
query {
  allPost {
    totalCount
    
    edges {
      node {
        id
        title
        description
        path
        content
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
