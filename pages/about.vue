<template>
  <v-container>
    <h2>About Chaise</h2>
    <div>
      Chaise is a dashboard for Apache CouchDB that allows multiple CouchDB services
      to be managed from within the same dashboard.
    </div>
    <h3>Features</h3>
    <ul>
      <li>Configure any number of CouchDB/Cloudant services</li>
      <li>Switch between configured services at will</li>
      <li>See list of databases (filterable)</li>
      <li>See list of documents in a database (filter by _id) with pagination</li>
      <li>Add/edit/delete documents</li>
      <li>Query a database using simple SQL statements</li>
    </ul>
    <h3>How does it work?</h3>
    <div>
      Chaise is a static web app hosted on GitHub Pages. It loads into your browser
      and stores its "state" (i.e. the list of configured services) in your browser's 
      local storage, so your credentials are store on your machine.
    </div>
    <div>
      The target CouchDB service must have "CORS" enabled.
    </div>
    <h3>Getting started</h3>
    <div>
      Visit the <NuxtLink to="/settings">Settings</NuxtLink> page and enter the details 
      of one or more CouchDB services.
    </div>
  </v-container>
</template>