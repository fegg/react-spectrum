/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {AriaButtonProps} from '@react-types/button';
import {HTMLAttributes} from 'react';

export interface CalendarAria {
  /** Props for the calendar grouping element. */
  calendarProps: HTMLAttributes<HTMLElement>,
  /** Props for the next button. */
  nextButtonProps: AriaButtonProps,
  /** Props for the previous button. */
  prevButtonProps: AriaButtonProps,
  /** A description of the visible date range, for use in the calendar title. */
  title: string
}


export interface CalendarGridAria {
  /** Props for the date grid element (e.g. `<table>`). */
  gridProps: HTMLAttributes<HTMLElement>,
  /** A list of week days formatted for the current locale, typically used in column headers. */
  weekDays: WeekDay[]
}

interface WeekDay {
  /** A short name (e.g. single letter) for the day. */
  narrow: string,
  /** The full day name. If not displayed visually, it should be used as the accessiblity name. */
  long: string
}
