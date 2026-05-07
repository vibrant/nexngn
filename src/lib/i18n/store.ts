import { writable, derived, get } from 'svelte/store';
import en from './en';
import pl from './pl';

export type Lang = 'en' | 'pl';
const STORAGE_KEY = 'nexngn-lang';

function pickInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  const url = new URL(window.location.href);
  const param = url.searchParams.get('lang');
  if (param === 'en' || param === 'pl') return param;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'pl') return stored;
  if (navigator.language?.toLowerCase().startsWith('pl')) return 'pl';
  return 'en';
}

export const lang = writable<Lang>('en');
export const t = derived(lang, ($l) => ($l === 'pl' ? pl : en));

export function initLang() {
  const initial = pickInitial();
  lang.set(initial);
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', initial);
  }
}

export function setLang(next: Lang) {
  lang.set(next);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute('lang', next);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url.toString());
  }
}

export function currentLang(): Lang {
  return get(lang);
}
