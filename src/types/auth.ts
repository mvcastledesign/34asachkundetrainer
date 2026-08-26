/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'schueler' | 'dozent';

export interface UserProfile {
  id: string;
  name: string;
  vorname?: string;
  nachname?: string;
  email?: string;
  role: UserRole;
  courseId?: string;
  courseName?: string;
  companyName?: string;
  avatarUrl?: string;
  invitationCode?: string;
  registeredAt: string;
  progressPercent?: number;
  successRatePercent?: number;
  status?: 'pruefungssicher' | 'im_zeitplan' | 'kritisch';
  lastActive?: string;
  maxStreak?: number;
  categoryPerformance?: CategoryPerformance[];
  examHistory?: ExamHistoryRecord[];
  questionProgress?: any;
}

export interface CategoryPerformance {
  category: string;
  percentage: number; // 0 - 100
  questionsAnswered: number;
}

export interface ExamHistoryRecord {
  id: string;
  date: string;
  examType: 'Schriftlich (34a)' | 'Mündlich / Simulator' | 'Übungs-Test';
  scorePercent: number;
  pointsObtained: number;
  totalPoints: number;
  passed: boolean;
}

export interface StudentDetail {
  id: string;
  name: string;
  vorname?: string;
  nachname?: string;
  email?: string;
  password?: string;
  securityQuestion?: string;
  securityAnswer?: string;
  avatarInitials: string;
  courseId: string;
  courseName: string;
  progressPercent: number; // 0 - 100
  successRatePercent: number; // 0 - 100
  status: 'pruefungssicher' | 'im_zeitplan' | 'kritisch';
  lastActive: string;
  maxStreak?: number;
  registeredAt: string;
  invitationCode?: string;
  categoryPerformance: CategoryPerformance[];
  examHistory: ExamHistoryRecord[];
  questionProgress?: any;
}

export interface Course {
  id: string;
  name: string;
  studentCount: number;
  startDate: string;
}
