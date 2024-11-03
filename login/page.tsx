"use client";
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email/password login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              '--size': `${2 + Math.random() * 4}rem`,
              '--left': `${Math.random() * 100}%`,
              '--time': `${5 + Math.random() * 10}s`,
              '--delay': `-${Math.random() * 10}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      <Card className="w-[350px] bg-white/10 backdrop-blur-md border-none text-white z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to AzureaNet</CardTitle>
          <CardDescription className="text-blue-100">Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-none text-white placeholder-blue-200"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/20 border-none text-white placeholder-blue-200"
            />
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100"
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/register">
            <Button variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-700/50">
              Create Account
            </Button>
          </Link>
          <Button 
            type="submit"
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 