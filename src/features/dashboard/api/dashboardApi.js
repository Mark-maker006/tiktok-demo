import { request } from '../../../shared/api/httpClient';

export function getDashboardOverview() {
  return request('/api/dashboard/overview');
}

export function getTeamConfigs() {
  return request('/api/dashboard/team-configs');
}
