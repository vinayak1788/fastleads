"use client";
import React from "react";
import CustomizationLeadManagement from '../../components/Dashboard/LeadAndCustomization/Customizationleadmanagement';
import SocialMediaCards from "../../components/Dashboard/LeadAndCustomization/SocialMediaCards";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="text-sm breadcrumbs">
          <span className="text-gray-600">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Customization Lead Management</span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Customization Lead Management Component */}
        <div className="col-span-1 md:col-span-1 lg:w-[80%] xl:w-[100%]">
          <CustomizationLeadManagement />
        </div>
      </div>

      {/* Social Media Cards */}
      <SocialMediaCards />
    </div>
  );
}
