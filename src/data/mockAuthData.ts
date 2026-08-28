/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, StudentDetail, Course } from '../types/auth.ts';

export const INITIAL_COURSES: Course[] = [
  { id: 'kurs-a', name: 'Kurs A (Intensiv May 2026)', studentCount: 12, startDate: '01.05.2026' },
  { id: 'kurs-b', name: 'Kurs B (Abendkurs Juni 2026)', studentCount: 10, startDate: '01.06.2026' },
  { id: 'kurs-c', name: 'Online-Kompaktkurs 34a', studentCount: 8, startDate: '15.06.2026' },
];

export const DEMO_USERS: UserProfile[] = [
  {
    id: 'usr-schueler-demo',
    name: 'Maximilian Schulze',
    vorname: 'Maximilian',
    nachname: 'Schulze',
    role: 'schueler',
    courseId: 'KURS-34a-2026',
    courseName: 'Sachkunde § 34a (Lehrgang 2026)',
    registeredAt: '10.05.2026',
    invitationCode: 'KURS-34a-2026'
  },
  {
    id: 'usr-dozent-demo',
    name: 'Dr. Alexander Weber',
    vorname: 'Alexander',
    nachname: 'Weber',
    role: 'dozent',
    companyName: 'Fachakademie für Sicherheitsausbildung',
    registeredAt: '01.01.2026'
  }
];

export const MOCK_STUDENTS: StudentDetail[] = [];
