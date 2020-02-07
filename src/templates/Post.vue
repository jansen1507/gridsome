<template>
  <Layout>

        <h1>{{ $page.post.title }}</h1>
        <p>{{ $page.post.description }}</p>
        <div class="content" v-html="$page.post.content"></div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'My Awsome Posts'
  }
}
</script>

<page-query>
query Posts ($path: String!) {
    post: post(path: $path) {
        title
        description
        content
    }
}
</page-query>

<style>

</style>
