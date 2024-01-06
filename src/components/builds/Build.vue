<script setup lang="ts">
  const props = defineProps(["id", "commit", "changes", "timestamp", "fullDownloadLink", "fileName"])

  function download() {
    fetch(props.fullDownloadLink)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = props.fileName;

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error:', error);

          navigator.clipboard.writeText(props.fullDownloadLink);
          window.alert("Link to the file has been copied to your clipboard.\n" + props.fullDownloadLink)
        });
  }
</script>

<template>
  <div class="build">
    <button class="downloadBtn" :id="'download-' + id" @click="download()">Build #{{ props.id }}</button>
    <div class="v-center">
      <p class="commit">{{ props.commit.substring(0,7)}}</p>
    </div>
    <div class="v-center">
      <p class="changes">{{ props.changes.substring(0,50)}}</p>
    </div>
    <div class="v-center right">
      <p class="timestamp">{{ new Date(props.timestamp).toLocaleString() }}</p>
    </div>
  </div>
</template>

<style scoped>
  .build{
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    transition: background-color .1s linear;
  }

  .build:hover{
    background-color: #594201;
  }

  p {
    margin: 0;
  }

  .downloadBtn, .commit {
    margin-right: 20px;
  }

  .downloadBtn{
    color: white;
    font-size: var(--font-size);
    font-weight: bold;
    background-color: transparent;
    border: 2px solid var(--yellow);
    border-radius: 25px;
    padding: 5px 15px;
    cursor: pointer;
    transition: all .2s linear;
  }

  .downloadBtn:hover {
    background-color: var(--yellow);
    transform: scale(1.06);
  }

  .commit{
    font-family: "Courier New";
  }

  .right{
    margin-left: auto;
  }

  .v-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>