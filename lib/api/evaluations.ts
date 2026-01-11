import { api } from "./client";

export const fetchAuditLogs = () =>
  api("/audit");
