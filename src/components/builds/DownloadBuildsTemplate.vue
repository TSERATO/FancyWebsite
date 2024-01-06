<script setup lang="ts">
import Build from "@/components/builds/Build.vue";
import {createApp, ref, VueElement} from "vue";

const props = defineProps(["plugin"])

const builds = ref([])

async function fetchAndRenderBuilds() {
  try {
    const projectResponse = await fetch(`https://jenkins.fancyplugins.de/job/${props.plugin}/api/json`);
    const project = await projectResponse.json();

    const sortedBuilds = project.builds
        .sort((a, b) => a.number > b.number ? -1 : 1)
        .slice(0, 15);

    for (const b of sortedBuilds) {
      const buildResponse = await fetch(`https://jenkins.fancyplugins.de/job/${props.plugin}/${b.number}/api/json`);
      const buildInfo = await buildResponse.json();

      if(buildInfo.result != "SUCCESS") {
        return
      }

      let lastChange = buildInfo.changeSet.items[buildInfo.changeSet.items.length - 1];
      if(!lastChange){
        lastChange = {
          commitId: "N/A",
          msg: "No changes",
        }
      }

      const build = {
            id: buildInfo.id,
            commit: lastChange.commitId,
            changes: lastChange.msg,
            timestamp: buildInfo.timestamp,
            fullDownloadLink: `https://jenkins.fancyplugins.de/job/${props.plugin}/${buildInfo.number}/artifact/build/libs/${buildInfo.artifacts[0].fileName}`,
            fileName: buildInfo.artifacts[0].fileName
      }
      builds.value.push(build)
    }
  } catch (error) {
    console.error(error);
  }
}

setTimeout(() => {
  if(builds.value.length > 0){
    return;
  }

  const buildsContainer = document.getElementById("builds")

  const errorParagraph = document.createElement('p');
  errorParagraph.textContent = "Could not load data."
  errorParagraph.className = 'error'

  buildsContainer.appendChild(errorParagraph)
}, 1000);

fetchAndRenderBuilds();
</script>

<template>
  <h1>Download {{ props.plugin }}</h1>
  <p class="stable-builds">
    You can download stable builds at the following places:<br>
    <a :href="'https://modrinth.com/plugin/'+props.plugin+'/versions'" target="_blank">Modrinth</a>,
    <a :href="'https://hangar.papermc.io/Oliver/'+props.plugin+'/versions'" target="_blank">Modrinth</a>,
    <a :href="'https://github.com/FancyMcPlugins/'+props.plugin+'/releases'" target="_blank">GitHub</a>,
  </p>

  <h2 class="color-yellow">Development builds</h2>
  <p class="color-gray">These builds might cause unexpected behaviour of the plugin<br>Please take backups before using them</p>
  <div id="builds">
<!--    <Build id="1" commit="af0ca77" changes="Add sitting player pose" timestamp="2024-01-06T14:23:51+00:00" />-->
<!--    <Build id="2" commit="af0ca77" changes="Add sitting player pose" timestamp="2024-01-06T14:23:51+00:00" />-->

    <template v-for="b in builds" :key="b.id">
      <Build :id="b.id" :commit="b.commit" :changes="b.changes" :timestamp="b.timestamp" :full-download-link="b.fullDownloadLink" :file-name="b.fileName"/>
    </template>

  </div>
</template>

<style scoped>
.stable-builds{
  margin-bottom: 100px;
}

.error {
  color: rgb(230, 47, 47);
  text-align: center !important;
  font-weight: bold;
  font-size: 1.3rem;
}
</style>