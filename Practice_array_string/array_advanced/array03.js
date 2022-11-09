'use strict';

/**
Complete the function resetApps such that it empties the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
const resetApps = apps => {
 apps.splice(0,apps.length)
 return apps
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(resetApps(apps));
