/// <reference types="vite-plugin-svgr/client" />
import yachtIcon from '../assets/yacht.svg?react';
import sabnzbdIcon from '../assets/sabnzbd.svg?react';
import transmissionIcon from '../assets/transmission.png';
import radarrIcon from '../assets/radarr.png';
import sonarrIcon from '../assets/sonarr.png';
import jellyfinIcon from '../assets/jellyfin.svg?react';
import jellyseerIcon from '../assets/jellyseer.svg?react';
import prowlarrIcon from '../assets/prowlarr.png';
import fireflyIcon from '../assets/firefly.png';
import authentikIcon from '../assets/authentik.svg?react';
import npmIcon from '../assets/npm.svg?react';
import n8nIcon from '../assets/n8n.png';
import seafileIcon from '../assets/seafile.png';

export enum GROUP {
  MEDIA_CENTER,
}

export enum STATUS {
  DISABLED,
}

export const services: Array<{
  name: string;
  desc: string;
  local?: string;
  remote?: string;
  tags?: Array<GROUP>;
  status?: STATUS;
  icon?: any;
}> = [
  {
    name: 'Yacht',
    desc: 'container status dashboard',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_YACHT_PORT}`,
    icon: yachtIcon,
  },
  {
    name: 'SABnzbd',
    desc: 'usenet downloader',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_SABNZBD_PORT}`,
    icon: sabnzbdIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'Transmission',
    desc: 'torrent downloader',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_TRANSMISSION_PORT}`,
    icon: transmissionIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'Radarr',
    desc: 'movie management',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_RADARR_PORT}`,
    icon: radarrIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'Sonarr',
    desc: 'tv show management',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_SONARR_PORT}`,
    icon: sonarrIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'JellySeer',
    desc: 'media browser',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_JELLYFIN_PORT}`,
    remote: `${import.meta.env.VITE_JELLYSEER_SUB}.${import.meta.env.VITE_DOMAIN}`,
    icon: jellyseerIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'Jellyfin',
    desc: 'media library',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_JELLYFIN_PORT}`,
    remote: `${import.meta.env.VITE_JELLYFIN_SUB}.${import.meta.env.VITE_DOMAIN}`,
    icon: jellyfinIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'prowlarr',
    desc: 'indexer manager',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_PROWLARR_PORT}`,
    icon: prowlarrIcon,
    tags: [GROUP.MEDIA_CENTER],
  },
  {
    name: 'Firefly',
    desc: 'Finance Tracker',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_FIREFLY_PORT}`,
    icon: fireflyIcon,
  },
  {
    name: 'Authentik',
    desc: 'Identity Provider',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_AUTHENTIK_PORT}`,
    remote: `${import.meta.env.VITE_AUTHENTIK_SUB}.${import.meta.env.VITE_DOMAIN}`,
    icon: authentikIcon,
  },
  {
    name: 'Nginx Proxy Manager',
    desc: 'Reverse Proxy',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_NGINX_PROXY_MANAGER_PORT}`,
    icon: npmIcon,
  },
  {
    name: 'N8N',
    desc: 'Workflow Automation',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_N8N_PORT}`,
    remote: `${import.meta.env.VITE_N8N_SUB}.${import.meta.env.VITE_DOMAIN}`,
    icon: n8nIcon,
  },
  {
    name: 'Seafile',
    desc: 'File Sync',
    local: `${import.meta.env.VITE_LOCAL_HOSTNAME}:${import.meta.env.VITE_SEAFILE_PORT}`,
    remote: `${import.meta.env.VITE_SEAFILE_SUB}.${import.meta.env.VITE_DOMAIN}`,
    status: STATUS.DISABLED,
    icon: seafileIcon,
  },
];
