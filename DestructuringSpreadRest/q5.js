// Q5. Safe Access
// Given a nested object, safely access user.profile.avatar.url using optional chaining,
// and fall back to "No Avatar" using nullish coalescing.

const avatarUrl = user?.profile?.avatar?.url ?? "No Avatar";