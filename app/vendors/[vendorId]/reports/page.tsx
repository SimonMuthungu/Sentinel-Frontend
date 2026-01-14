"use client";

import { useEffect, useState } from "react";
import { getVendorRuns } from "@/lib/api/vendors";

export interface VendorRun {
  id: string;
  vendor_id: string;
  run_timestamp: string;
  decision: string;
  confidence: number;
  final_assessment: string;
  recommended_actions: string[];
  policy_violations: any[];
  human_review_required: boolean;
  reasoning_notes?: string;

}

export default function VendorReportsPage({ params }: { params: { vendorId: string } }) {
  const [runs, setRuns] = useState<VendorRun[]>([]);

  useEffect(() => {
    getVendorRuns(params.vendorId).then(setRuns);
  }, [params.vendorId]);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Executive Report for Vendor {params.vendorId}</h2>

      {runs.length === 0 && (
        <p className="text-gray-500">No reports available yet.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {runs.map((run) => (
          <div
            key={run.id}
            className="rounded-lg border shadow-sm p-4 bg-white hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                {new Date(run.run_timestamp).toLocaleString()}
              </span>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  run.decision === "Approved"
                    ? "bg-green-100 text-green-700"
                    : run.decision === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {run.decision || "Pending"}
              </span>
            </div>

            <div className="mb-2">
              <div className="text-sm font-medium">Decision</div>
              <p>{run.decision || "—"}</p>
            </div>

            <div className="mb-2">
              <div className="text-sm font-medium">Confidence</div>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${(run.confidence * 100).toFixed(0)}%` }}
                />
              </div>
              <span className="text-xs text-gray-600">
                {(run.confidence * 100).toFixed(1)}%
              </span>
            </div>

            {/* <div className="mb-2">
              <div className="text-sm font-medium">Assessment</div>
              <p className="text-gray-700 text-sm">{run.final_assessment || "—"}</p>
            </div> */}


          {/* <div className="mb-2">
            <div className="text-sm font-medium">Confidence</div>
            <p>{(run.confidence * 100).toFixed(1)}%</p>
          </div> */}

          <div className="mb-2">
            <div className="text-sm font-medium">Final Assessment</div>
            <p>{run.final_assessment || "—"}</p>
          </div>

          {run.reasoning_notes && (
            <div className="mt-2">
              <div className="text-sm font-medium">Reasoning</div>
              <p className="text-gray-700 text-sm">
                {run.reasoning_notes}
              </p>
            </div>
          )}

          {/* {run.recommended_actions?.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-medium">Recommended Actions</div>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {run.recommended_actions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )} */}

            {run.policy_violations?.length > 0 && (
              <div className="mt-2">
                <div className="text-sm font-medium">Policy Violations</div>
                <ul className="list-disc list-inside text-sm text-red-700">
                  {run.policy_violations.map((v, i) => (
                    <li key={i}>
                      [{v.severity}] {v.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-2">
                <div className="text-sm font-medium">Recommended Actions</div>
                {run.recommended_actions && run.recommended_actions.length > 0 ? (
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {run.recommended_actions.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">—</p>
                )}
              </div>

          </div>
        ))}
      </div>
    </div>
  );
}