"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, AlertCircle, ArrowRight } from "lucide-react";
import { auth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-soft/30 flex-1">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
          <Link href="/" className="inline-block text-brand-gold font-bold text-3xl tracking-tight mb-6">
            APEX <span className="text-brand-midnight">Getaways</span>
          </Link>
          <h2 className="text-3xl font-bold text-brand-midnight tracking-tight">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Secure access to the APEX management dashboard.
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl shadow-brand-midnight/5 rounded-3xl border border-brand-steel/10 sm:px-10">
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3 border border-red-200 text-sm font-medium">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <div className="mt-2 relative">
                  <Mail size={18} className="absolute left-3 top-3 text-brand-muted" />
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-brand-soft/20 border-brand-steel/20" 
                    placeholder="admin@apexgetaways.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs font-semibold text-brand-ocean hover:text-brand-deep">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2 relative">
                  <Lock size={18} className="absolute left-3 top-3 text-brand-muted" />
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12 bg-brand-soft/20 border-brand-steel/20" 
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full h-12 bg-brand-midnight text-white hover:bg-brand-midnight/90 font-bold text-base"
                >
                  {isLoading ? "Authenticating..." : (
                    <>Sign In <ArrowRight size={18} className="ml-2" /></>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-brand-steel/10">
              <p className="text-center text-xs text-brand-muted">
                Protected by Firebase Authentication. Authorized personnel only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
